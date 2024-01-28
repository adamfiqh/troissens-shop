<script setup>
import { ref, onMounted } from 'vue'
import { useProductStore } from './store/product'
import axios from 'axios'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const store = useProductStore();
const products = ref(null)
const images = ref([
])

const breakpoints = ref(
  {
    // 700px and up
    320: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // 1024 and up
    1024: {
      itemsToShow: 2,
      snapAlign: 'right',
    },
  }
)

const getAllProducts = async () => {
  fetch("https://sistemtoko.com/public/demo/product")
    .then((res) => res.json())
    .then((json) => {
      products.value = json.aaData;
      console.log(products.value);
    });
}

onMounted(async () => {
  getAllProducts()
})

const items = ref([
  {
    label: 'Home',
  },
  {
    label: 'Product',
  },
  {
    label: 'About',
  },
  {
    label: 'Contact',
  },
  {
    label: 'Blog',
  },
  {
    label: 'User',
    items: [
      {
        label: 'Sign In',
      },
      {
        label: 'Sign Up',
      },
    ],
  }
]);

</script>

<template>
  <div>
    <!-- Navbar -->
    <Menubar :model="items" class="lg:px-8 flex justify-content-between">
      <template #start>
        <svg width="185" height="24" viewBox="0 0 185 24" fill="none" xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect width="185" height="24" fill="url(#pattern0)" />
          <defs>
            <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
              <use xlink:href="#image0_35_39" transform="matrix(0.00197628 0 0 0.0152339 0 -0.0103343)" />
            </pattern>
            <image id="image0_35_39" width="506" height="67"
              xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfoAAABDCAYAAAB0p8dAAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKL2lDQ1BJQ0MgUHJvZmlsZQAASMedlndUVNcWh8+9d3qhzTDSGXqTLjCA9C4gHQRRGGYGGMoAwwxNbIioQEQREQFFkKCAAaOhSKyIYiEoqGAPSBBQYjCKqKhkRtZKfHl57+Xl98e939pn73P32XuftS4AJE8fLi8FlgIgmSfgB3o401eFR9Cx/QAGeIABpgAwWempvkHuwUAkLzcXerrICfyL3gwBSPy+ZejpT6eD/0/SrFS+AADIX8TmbE46S8T5Ik7KFKSK7TMipsYkihlGiZkvSlDEcmKOW+Sln30W2VHM7GQeW8TinFPZyWwx94h4e4aQI2LER8QFGVxOpohvi1gzSZjMFfFbcWwyh5kOAIoktgs4rHgRm4iYxA8OdBHxcgBwpLgvOOYLFnCyBOJDuaSkZvO5cfECui5Lj25qbc2ge3IykzgCgaE/k5XI5LPpLinJqUxeNgCLZ/4sGXFt6aIiW5paW1oamhmZflGo/7r4NyXu7SK9CvjcM4jW94ftr/xS6gBgzIpqs+sPW8x+ADq2AiB3/w+b5iEAJEV9a7/xxXlo4nmJFwhSbYyNMzMzjbgclpG4oL/rfzr8DX3xPSPxdr+Xh+7KiWUKkwR0cd1YKUkpQj49PZXJ4tAN/zzE/zjwr/NYGsiJ5fA5PFFEqGjKuLw4Ubt5bK6Am8Kjc3n/qYn/MOxPWpxrkSj1nwA1yghI3aAC5Oc+gKIQARJ5UNz13/vmgw8F4psXpjqxOPefBf37rnCJ+JHOjfsc5xIYTGcJ+RmLa+JrCdCAACQBFcgDFaABdIEhMANWwBY4AjewAviBYBAO1gIWiAfJgA8yQS7YDApAEdgF9oJKUAPqQSNoASdABzgNLoDL4Dq4Ce6AB2AEjIPnYAa8AfMQBGEhMkSB5CFVSAsygMwgBmQPuUE+UCAUDkVDcRAPEkK50BaoCCqFKqFaqBH6FjoFXYCuQgPQPWgUmoJ+hd7DCEyCqbAyrA0bwwzYCfaGg+E1cBycBufA+fBOuAKug4/B7fAF+Dp8Bx6Bn8OzCECICA1RQwwRBuKC+CERSCzCRzYghUg5Uoe0IF1IL3ILGUGmkXcoDIqCoqMMUbYoT1QIioVKQ21AFaMqUUdR7age1C3UKGoG9QlNRiuhDdA2aC/0KnQcOhNdgC5HN6Db0JfQd9Dj6DcYDIaG0cFYYTwx4ZgEzDpMMeYAphVzHjOAGcPMYrFYeawB1g7rh2ViBdgC7H7sMew57CB2HPsWR8Sp4sxw7rgIHA+XhyvHNeHO4gZxE7h5vBReC2+D98Oz8dn4Enw9vgt/Az+OnydIE3QIdoRgQgJhM6GC0EK4RHhIeEUkEtWJ1sQAIpe4iVhBPE68QhwlviPJkPRJLqRIkpC0k3SEdJ50j/SKTCZrkx3JEWQBeSe5kXyR/Jj8VoIiYSThJcGW2ChRJdEuMSjxQhIvqSXpJLlWMkeyXPKk5A3JaSm8lLaUixRTaoNUldQpqWGpWWmKtKm0n3SydLF0k/RV6UkZrIy2jJsMWyZf5rDMRZkxCkLRoLhQWJQtlHrKJco4FUPVoXpRE6hF1G+o/dQZWRnZZbKhslmyVbJnZEdoCE2b5kVLopXQTtCGaO+XKC9xWsJZsmNJy5LBJXNyinKOchy5QrlWuTty7+Xp8m7yifK75TvkHymgFPQVAhQyFQ4qXFKYVqQq2iqyFAsVTyjeV4KV9JUCldYpHVbqU5pVVlH2UE5V3q98UXlahabiqJKgUqZyVmVKlaJqr8pVLVM9p/qMLkt3oifRK+g99Bk1JTVPNaFarVq/2ry6jnqIep56q/ojDYIGQyNWo0yjW2NGU1XTVzNXs1nzvhZei6EVr7VPq1drTltHO0x7m3aH9qSOnI6XTo5Os85DXbKug26abp3ubT2MHkMvUe+A3k19WN9CP16/Sv+GAWxgacA1OGAwsBS91Hopb2nd0mFDkqGTYYZhs+GoEc3IxyjPqMPohbGmcYTxbuNe408mFiZJJvUmD0xlTFeY5pl2mf5qpm/GMqsyu21ONnc332jeaf5ymcEyzrKDy+5aUCx8LbZZdFt8tLSy5Fu2WE5ZaVpFW1VbDTOoDH9GMeOKNdra2Xqj9WnrdzaWNgKbEza/2BraJto22U4u11nOWV6/fMxO3Y5pV2s3Yk+3j7Y/ZD/ioObAdKhzeOKo4ch2bHCccNJzSnA65vTC2cSZ79zmPOdi47Le5bwr4urhWuja7ybjFuJW6fbYXd09zr3ZfcbDwmOdx3lPtKe3527PYS9lL5ZXo9fMCqsV61f0eJO8g7wrvZ/46Pvwfbp8Yd8Vvnt8H67UWslb2eEH/Lz89vg98tfxT/P/PgAT4B9QFfA00DQwN7A3iBIUFdQU9CbYObgk+EGIbogwpDtUMjQytDF0Lsw1rDRsZJXxqvWrrocrhHPDOyOwEaERDRGzq91W7109HmkRWRA5tEZnTdaaq2sV1iatPRMlGcWMOhmNjg6Lbor+wPRj1jFnY7xiqmNmWC6sfaznbEd2GXuKY8cp5UzE2sWWxk7G2cXtiZuKd4gvj5/munAruS8TPBNqEuYS/RKPJC4khSW1JuOSo5NP8WR4ibyeFJWUrJSBVIPUgtSRNJu0vWkzfG9+QzqUvia9U0AV/Uz1CXWFW4WjGfYZVRlvM0MzT2ZJZ/Gy+rL1s3dkT+S453y9DrWOta47Vy13c+7oeqf1tRugDTEbujdqbMzfOL7JY9PRzYTNiZt/yDPJK817vSVsS1e+cv6m/LGtHlubCyQK+AXD22y31WxHbedu799hvmP/jk+F7MJrRSZF5UUfilnF174y/ariq4WdsTv7SyxLDu7C7OLtGtrtsPtoqXRpTunYHt897WX0ssKy13uj9l4tX1Zes4+wT7hvpMKnonO/5v5d+z9UxlfeqXKuaq1Wqt5RPXeAfWDwoOPBlhrlmqKa94e4h+7WetS212nXlR/GHM44/LQ+tL73a8bXjQ0KDUUNH4/wjowcDTza02jV2Nik1FTSDDcLm6eORR67+Y3rN50thi21rbTWouPguPD4s2+jvx064X2i+yTjZMt3Wt9Vt1HaCtuh9uz2mY74jpHO8M6BUytOdXfZdrV9b/T9kdNqp6vOyJ4pOUs4m3924VzOudnzqeenL8RdGOuO6n5wcdXF2z0BPf2XvC9duex++WKvU++5K3ZXTl+1uXrqGuNax3XL6+19Fn1tP1j80NZv2d9+w+pG503rm10DywfODjoMXrjleuvyba/b1++svDMwFDJ0dzhyeOQu++7kvaR7L+9n3J9/sOkh+mHhI6lH5Y+VHtf9qPdj64jlyJlR19G+J0FPHoyxxp7/lP7Th/H8p+Sn5ROqE42TZpOnp9ynbj5b/Wz8eerz+emCn6V/rn6h++K7Xxx/6ZtZNTP+kv9y4dfiV/Kvjrxe9rp71n/28ZvkN/NzhW/l3x59x3jX+z7s/cR85gfsh4qPeh+7Pnl/eriQvLDwG/eE8/s3BCkeAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIXRFWHRDcmVhdGlvbiBUaW1lADIwMjM6MTA6MjQgMTQ6MjY6NTXqDE5BAAAULElEQVR4Xu2dXXIUNxeGp419DzsAbwBYQcAbCFlByC35qiArCFlBoCpwG1gBZgPgrCCwAWAH4X6M53tfSWPPT/9Iah21WpynavD0YE9LraPzIx1JzWq1WiiKoiiKUidq6BVFURJyfPLXQ6jWO3h7+undr2f2U0WZDjX0iqIoCTg+eX59sTg8hVr9wX0EVs9h7J+4C0WZBDX0iqIoIzk+efEA6vSNu9xh9Q+M/T13oSjZUUOvKIoyAhj5Z1Clj91lFx8Xi+WDT+8ef3HXipINNfSKoigRHJ88v7lYHJ3i7W37iQ/LW2rsldyooVcURQnEGfnP7jKQ1U+f3v1KB0FRsnDgfiqKoij+fHU/I2je2Mx8RcmDRvSKoiiRHJ+8ZEb9n/YqFM3IV/Kghl75rrCR1AEzoLnOeXNu9SNeHxaLi7NP7/73yn6kKMO4ZXVPoU6HEvLaePvp3aMH7r2iiGAM/fHJCyo+CurG+s/JgMJdPdGNJpSURERev0EBP3PvFWUQN29PmfnRfuLL6p/F4vyhJukpUjS37j+DN3r0n7suiOVdCD4iLEWJxyrfQ0ToMU6sKmAlHLemHoFTSDY+Wd3XAEeRgMl4UIQlclhouZR5weVPsSNV/DuzfEpRvGFG/ad3jzg19Jv9xJfmPZwEOgiKkpQDFzVzfrIkPuryE2UsdiOT0Khqj9vuexQlCDv1s7yBt2/tJz40vx+fPKeToCjJcMvrloUlg5RWHmWeNIm2HU31Pcr3BgKprzbZbnUfl74BlU4VKUkxht7OQdLz5JzklPD+yxs6J6okYmw0vybV9yjfKZx79xjOZwZ+Q+fAXStKEi43zLGeJw9emMrY24MfVMiVhKSakiptakuZKd3D+Re/2MhfUdLTsjPe+UTCNtV9lXpZJcpgTvU9irI5nL+8hdddO4qpezcocrRumGOTj6I2f4hEd4hSZDg+eclk0zFD7x/dkKuiKMosaYnoyXnmLONzXVKiCMHEztjpKJMzoiNNiqLMms4tcBHVn+G/M+yUZ+fm3YWiiKA74ymK8r3SEdEbcs1L6vynIg6NNl4Nk55w+Rqv3QQ7XuNzkxTVqJFXFKUW+iJ6RNnNe3cpiG77qCiKoihS9J5ed3zyUvxoOxtl1YHd0eqISxRv4tHitbreM/3xFv//Ba8Pi8W3syn3DnD7waPsLLM51Q3l7i07o991eeGksR7nH6asQw1Y+bmG1wGe/bodDEOHpGy0B+WJ7fGN7VHEWRG11quLnfqupyXZt/qSQjeX26FPXXydQ119sTrmGp6FOTmSz6Wn7Zkb06yXWbsgcEkdOZtnUZrMN7fu/8UHX8rJdWteo2GfrSsnvwrAJGtBoM55T+91/FZ4Dx/iLZ7h6OfHBn6VY8gY5YbQXXvgOt3P9tNkQGFdnEo7L/lXhnQRt2JkR/GlboNNIFdmeeBpjpGzWuvVR2I90ILRT9SFo+rq8lRYzoQbQK2NMg3SAn3+autyq2cOcc+GCa2p7rlu9617TckcZB6G/oV41B4P15iyA2VV6L1JWELCu4tIIpg9i73hK5dTB8G8QD2+QTDTbYRUjpFf42fsrwyCqOwMASd6BYcynXGstV59ZNIDHayeIyhBXf2jvLx9hnkwDaLYLPfL2u5r5ibzhRt6VmRomEeC/bwBNCwE94jKXNJj24Ce8vgjUp1C4ojNxIbRKCeOmIyO8hGZ0JPPLBO9cOtSdvhWoGT5fzQKJY2aMTp4CjmPjopqrVcfTg9wOXAJ8vcWwRDqOmzwC+wzqRFt9zVzlfnSDT3nrWhwQ5ZFpeBScVvP7YjR9USdZHkrxjiWY+D3gPO2fII6RUf4EUvlhFn91NbJnFHgjmdTefw+QEks6VAGRId11quPwgz8Lq+hrxBddlPeKJgYdH6oX5JOG85d5gs39FaBQkhh7PN6UOg4De5LQ/m7+2gyWBb31ot0htDMDdJTNKMbiZXdqOmJKWSinfZhewHFCgfpAnXeT8xBu6znCFmOSEW0+gP1YNv2Umu9+hCosxDLu12ODZ4lHP+j/9xlZlZ/4B+0sUnYvXTwbfuaJGAGVYlHStud7xhqkPlSk/Hgla2eobB4GJYJhp7gHZXivQXNAcPrTNGW3fdMJ/jjpiemH47sNPKQ22T9iREKn5HXCMg4J69/86pa69UF6ou/kVpizKms7aSqDcNHJR2r5DsNXFr94IdvkCJTNj+92UctMt+7vI7gZmIRf3ikWoxnDSfAJJlteWRWMYg4TYP7rePe8IqbN+5yJMOKEXLBYaxEXni89z2dTOQx8mh3M4UUwrgytLd9rfXqAvdiPxYYzfN12kcp+d7+lLgte4nQ8YnLFm/sa5L5vp3xisM2mBlOnhB2okd3eNrUppEnKB8aReQUvl7vHsKQ0MiT4TrgGfTOCYbRvLF1CGcamTAdaE95WOWcUkktoxQUyhCd/8DyOyNzSa316gKySOdRwsjTAHuVAf0LZTBD3hGwPzFCbgdl8HZ48nOeUK+Q5rFvu29Sm8zPytBbziMf2GiY8NKgk/RGnr7DMqlIb+Q5d+5dh9/czwTEG/v8MtF5vwR5EVegHSKSMM2o0tjpjF1lW2u99sB9GEEJjBAxqTZs1Aq/zyF8TiFGYBKI+0jYd9PhZIOrrVLyp5OfEKqS+dkZejwwRNHZI7jnaSPYYFoFH4KQ2sjj+fonyIX8rh9xxj6zTHy099vG7lGQFkRlXFoaCNcvj+ZyBKnWerWB6Edo/tokyUXlodgpwih+xHPufGbp+25KVlHTeP3451rUKPMzjOjJivPDmRif0DGefcG3Q3NpjTzr6t4EEPM3ffQPO3aTSya6lNBB5GhEH4cCCi+UWuu1DRxMRs8Se2RwhGzPMfTn24hnZXbr6yF1301D6MiHL66NPahP5mdq6McIfxBvI4185HBbKyxDS32PJJ5BzHcKlCOmbrlk4rzLoRDI/jdzbB/CRjmWZ+7NCLYMQK31ugTluIcySczJ/zM2coaTMGYqcCgizNRnYpAYoWt+94ysq5P5WRp6J/wpjWkHy8ghnOjhth2MotgTDOeZRi6/6QYORbBgxfyNB7ddHb3JJRPxQ7DRoJ05yvFyxWcyNNrhoseR86/nQc8+koLqJbWEbrJ8Ikf/NIRQ303FiFGQPrht8WRMJvMzjegNQoJwSUhS2hbMyIeRjsyYXWM2PdhLILEeqcgmPm/dzxjG/G0H3t73JtIyIVDPENjuR59dZEBF0Rqx2ShydR9vQx0frvPlToxjosgIpqsX7+feJoZO+pghewvKF5pEFsrEMt1FI+RQi+jOCPLKvBr6DsYPuTFjlofyhDYQh1qWN+zft8FtbSXgkYixjPnbPoLrKmzo++qZNUGUkQEVxb82Onj5Cspia+SH0RpkGMpj9RMuh5T5a/zeffz+AyiGHQVba71EnWaQKmekEY5ApfruWFIMW7eDdh/IAapP5me1Yc4m1tOVGnIbV7ZdrGAdsfHotTFK3ZwDQsPtH/HYhVx7XPxiRyLCsYKZOjHQEtIO0jLR94xwbzglUkYjBCqpBnK05ImBW8atJWr4svb4u6i1XgR9iUY06TKqK+isjxsZwbNHsDFqqd/gJi02w/zgb3eZnFg9atv06F93mZre7bdrlPkZG3pRQUhq6FMBARQzqBCmzn2yh5BtC/9d86RlYugZSfaVeEwyztZWq6FovaL4iDJGnaZm5fiQRn7kUr/hvlOqHkW5GBx9dpep8TgEqC6Zn+3QfaxRmjmS83Vjoo9RkcsA3nXOIBNbXvU+ZmitMBgRNu+huD7gFTkMXF+9rIETZSPxisOxfz3kPfHayzuxn7+4x0iS9bGGd/x6fk8nQ7LvRoO+PNDXRuGR+1OXzM95jv47pBmYW4pnTMeS7ZRydQ4F9exVilaxlqggDDA83CHMZPw+azM4XdRZryPpJLdNfrbD4zTgR//Zsl69nGF/jxeHi1mfBJgErkGEDWqpDC6fq03m1dDPC4H1ncUzqzpbBWGSMAuGkYExON5RQYX1ymnoM2OG7EteOjcLapJ5NfSKkhhESR/c3GTqPbtTw6jgAyICr1GTyuolOFJ08Yt7MwH+OS3KMLXIvBp6RRHCJvwwIsi6XCeU24gIPh/vLOnpo5J6JRoi38euzFjewNuhpVAJYVuEH5yj+DF3me819PAORBNWpL9fUabGRgTc+MjMmWZU/KEwcSzE2NdZrxQwqsLz+QrjgPuaoV/JaJDZ/Yzi7+Ge3+N8ezbmLPMa0c+LgoVLjCrqDAXBTS+o+G9BUZj9p8sj3CjWWq9xHF4On1rjYKJBRPgc0k8VEfJZc7nnoztoA43iMzJHme9dR28j7unWJfeBsl1nEoK7FMBsH1iUh4yGG7uBRg/FrqP3Pj0wg0yM3gRlE7QnE8LQGaXaNJZx9ZxDvTifiR9Cw/dm++reXR3tMzLHkPJZka6kU+focgc7bqz1DUYmnV6S7jMwiNH7kaCNxNayjylXG6XL/IChN5l8QjtHGXp3KOqjZCdECggTBUk3zOlgzjJhy35ID5wGQOBM9BDSHc1car2g27jDocSxtID73O+fU1EiJfeZORn6TUqU+RkbetmtG8dsCSuJnPCP2QJXri1COmRpMmEdM9PZOZS7G7EhUjP7jHPr462lUFAUiLKu0alDfaZRFH3PvYZ6yctK/kDBjRKgXtxqe/UVr1dD8iobPBDuux631K8kQz93mR+ao0fFRBnx/dIbqZSzUcs2UnNCY+or9axC6yrdZgfotMPQQbZKigrUDOW1DcviM26Qst7pyigSAwzEVypoKI17ViGZjTuy5irYqGSbmuoV69T6cxR6INMo8Jw5rcdzHjhKcRvvYVR8HBlxPbonR3OiFpkfMvTSxm6McREWoFIFVOqs8DH1lXpWoXUVb7NexxQd6iY7Ot6GjoJRMb/B37YaHyiJUygJKA+zZGvk+dS+XCWU1VovOafZ8OOmwpfEGfnYueGCg7npqE3mhwy9ULLKJWO+v82zSon090dBDxEKauRZ962Mqa/As2JCU3BC2MQyYQ7hGCPTP3cpCGKjg0fPbGQgrSQ2I71a6yXlNK+hwvfbjCgWPNfTHiPvs6xv4j7TjvxzG/r+umS+09DDS8ziicXcB42UJdrOdZ9Q4BVSQQWecz9MXFuIyMlHV0dvMspEq4KwUVUSoCA4r9fPlZKQ2sDDHJ1cbb2IcySFlSw3MElvtPgs0TacD+4xpKveJFaJcrURd5/NkRcJur+/Rpnvi+hzDblEDG+ZjMYM5LpPDEuJssV8p0A5YuqWq62OOu7TpOwv3koODhHvm9zpQ7TrDGKt9bJQyeKH8Jwpjb3/uQJDwBBBBrkkrje5i87ywGqVQybuZeBajAyllLs2er6/PpnvMfS5Dt6PmVtqMin1XPcJB9EIFFbq05Wi2iJ2brADLqeLWSecra26lGOyaS7UPzRbu3OIMJaNMtRar0tg7CE74lubur3I4+ftER3ecUP1HlnyKw/HIpsejXAopMvW+/3VyXyroR8jjDGE3M/9brKGGOA27iftWUZjPfa0xj4k8kgZpVjiDuTILxOS0wR+x4vKIpGkVna9bDQlbuwhoyZRi8fTnrL/WOPdLk/4/Cb1D15P8TpDFM/17h5z3mbtdO+Strx9pvkhpM/YpY/iZUM/NvcRpByZ74joG+EklV1C7pe7bIvc9wtCwNgj8hieV3K/k3CPhTGnbuWWidalU0n2Mx9S0B0kdjy2ktRqrdceKGMOY7+GBhv9h8b76F9n/Lde+PwzZNudU++7Btts1uMTzZfQZ/awDoHk/gabHPztHJ5dqpP5PUMPAePQQa7oaA0j58EECPc7mctGbzR15JoWCFRiY3/oYXB9fseXeCM/jUxw6dRuNLBMkcATPD/nFFXCHd7M1MnGaoda69WONfaih9BI8taVv5fp+kyrUb3E/r/kLn1tcISl/r68Zehh0KhshbaFHKJ57ASwFft/qeeDvUGU+yKzBxyGNZRLHrKQICKhczPYFgl2eWJZ44/WnFYmGA1cOYB2Lm60swWHN2TqhAoq5a5m+w5XrfXq45M5hGbKM+Vj4HA9cw36mbbPtBlViytXwjYPwUT2l/quRpm/3AIXFT3D5SRb9G2zv892yWUrESdgCYbVjdPwFHU2Q1BoB0YLcHiStEX09sekVJlAuaBsR3dYRAMXeDbfPlilc4Ud2rzG4U3eM2FU1r9Vaa316sNOTx1S3qcKMDzxq2PBfaaUcm2dUVCTzBtDD8PA4fqJIvk2rk5/Sme0UhEWHUxFwUrqNaL4JxD60M1wLildJvDsb+LZo0+VoLyGYLLOOZy54faotV5DWIVs5pilN5cJxD/wKLXPlFeu7QCkFplfD90XZOTJ1tK+wTmnvMQsFckPG9sqAW612J1tnA+WgQd9PHqYQPkWLROo3xc8e5TRDP8Fz9XlwbTHDcqIb3vUWq8h8D08Ux7RnZkaK6Avcd0/+1LQ6GKpfaawcm2XpxaZXxv60iqwuYFFks6ajqudteYAG94KAHde4rxjtqxiwmEr3PNSCLeGrkZQmEy0lwd15r7WiAaXd8swEGx7nsD3qOlTCkPUWq8h8L1U+q4vGcWfOWnPKPRbuP+DiL5UaJ8xp74VRLt+n7vMu6F7Dk+YoakSIvvXKPxWhHQ8aQLJJvOYox8C7X3dHp14QO81dZvDSbs4XSy+nVExus+SM1eZcMPAfO58CQ8FG6eOipTHZ4pON9VaLx8gi6wz+hOXRqUe4jVGJUk9S+0zbvieOj/3SoAd6u3Ll8l4yveLdfQOqaTw06zjhCOwwqtTaXEEaG3Ez/C7eH/OZJNZjXaUgHv2ePHkPfPM+fxB7/Nfs9EObIMGL9MWiDyTjZ5EUWu9fLAGwCRZoa7roeDBeq9HMbU/zZRyZX6x+D9GEGX6t0q5WgAAAABJRU5ErkJggg==" />
          </defs>
        </svg>

      </template>
      <template #item="{ item, props, hasSubmenu, root }" class="flex w-full justify-content-center">
        <a v-ripple class="flex align-items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
            item.shortcut }}</span>
          <i v-if="hasSubmenu"
            :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
        </a>
      </template>
      <template #end>
        <div class="hidden align-items-center gap-2 lg:flex" style="width: 14rem">
          <Button label="Sign Up" style="color:#214195" outlined />
          <Button label="Sign In" class="text-white" style="background-color: #214195" />
        </div>
      </template>
    </Menubar>

    <!-- Hero Section -->
    <div
      class="container flex lg:flex-row flex-column gap-3 justify-content-between align-items-center lg:px-8 my-4 lg:my-8 h-full">
      <div class="col-12 lg:col-6 ">
        <div class="text-center p-3 border-round-3xl font-bold flex flex-column justify-content-between">
          <div class="button_learnMore ">
            <h1 class="text-left" style="font-size: 57px;">Discover The Latest Trend in Fashion</h1>
            <span class="p-input-icon-left w-full">
              <i class="pi pi-search" />
              <InputText class="w-full bg-white" style="border-radius: 100px !important;" v-model="value1"
                placeholder="Search" />
            </span>
          </div>
          <div class="interesting text-left relative mb-0 mt-4" style="">
            <img src="/interesting_2.png" class="w-full" alt="" srcset="">
            <div
              class="interesting_button flex justify-content-between w-full align-items-center absolute bottom-0 lg:mb-3 mx-2 lg:mx-3">
              <div class=" col-8 lg:col-10">
                <h3 class="text-white text-base md:text-3xl lg:text-3xl mb-0">See interesting experiences with the latest
                  clothing
                </h3>
              </div>
              <div class="col-4 lg:col-2 mx-auto flex justify-content-center md:justify-content-end">
                <div class="interesting_arrow py-2 md:mr-3">
                  <i class="pi pi-arrow-up-right px-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 px-4 lg:px-0 lg:col-6 mt-0 md:mt-4 lg:mt-0">
        <div
          class="text-center p-3 flex flex-column align-items-center justify-content-between border-round-3xl font-bold"
          style="background-image: url('/thumb_promo.png'); height:37rem !important; background-size: cover; background-position: center;">

          <div class="casual_minimalist h-full flex align-items-center w-full">
            <h1 class=" text-white">Casual & Minimalist</h1>
          </div>
          <div class="button_learnMore">
            <div style="width: 100%; height: 100%; position: relative">
              <div class="flex justify-content-start align-items-center promo justify-content-between">
                <h4 class="mb-0 ml-5">Get a 20% promo</h4>
                <Button class="border-0 learn_more">
                  <div
                    style="text-align: center; color: #1E1E1E; font-size: 18px; font-family: Plus Jakarta Sans; font-weight: 500; word-wrap: break-word">
                    Learn More</div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonial -->
    <div v-motion-slide-visible-once-bottom
      class="container mb-7 lg:px-8 flex h-full lg:flex-row flex-column align-items-center justify-content-between">
      <div class="col-12 lg:col-4 flex align-items-center justify-content-center">
        <h6 class="text-center lg:text-left flex justify-content-center" style="color: #252525; font-size: 40px;">We are
          already available on the</h6>
      </div>
      <div class="col-12 lg:col-6 flex lg:flex-row flex-column gap-4 align-items-center flex-wrap">
        <img src="/tiktok.png" alt="" srcset="">
        <img src="/tokped.png" alt="" srcset="">
        <img src="/shopee.png" alt="" srcset="">
        <img src="/lazada.png" alt="" srcset="">
      </div>
    </div>

    <!-- Product -->
    <div v-if="!products" class="container px-8 ">
      <h1 class="text-center">Best Seller</h1>
      <div class="space-y-10 flex-wrap flex justify-content-between w-full">
        <Skeleton width="100%" height="550px"></Skeleton>
      </div>
    </div>
    <div v-else class="container px-4 lg:px-8 ">
      <h1 class="text-center">Best Seller</h1>
      <div class="space-y-10 flex-wrap flex justify-content-between w-full">
        <Card v-motion-slide-visible-once-bottom v-for="product in products" :key="product.id"
          style="width: 25rem; overflow: hidden; background-color: #E8E8E8 !important;" class="m-3 relative h-auto">
          <template #header class="text-center">
            <img alt="user header" :src="product.photo" class="text-center mx-auto flex w-full" />
            <div style="background-color: #E95144 !important; width: 5rem"
              class="text-center absolute p-2 top-0 mt-3 ml-3" value="Primary" rounded>
              <h4 class="mb-0 text-white"> Sale</h4>
            </div>
          </template>
          <template #title class="flex justify-center mx-auto">
            <p style="font-size: 14px !important; color: #252525 !important" class="text-center">{{ product.name }}</p>
          </template>
          <template #subtitle>
            <p style="font-size: 19px !important; color: #214195 !important; font-weight: 500" class="text-center">{{
              product.price }}</p>
          </template>
        </Card>
      </div>
    </div>

    <!-- Discount -->
    <div v-motion-slide-visible-once-bottom class="container px-4 lg:px-8 my-8 h-100">
      <div class="grid nested-grid">
        <div class="col-12 lg:col-4">
          <div class="text-center p-3 flex align-items-end justify-content-center border-round-3xl font-bold"
            style="background-image: url('/thumbnail.png'); height:37rem !important; background-size: cover;">
            <div class="button_learnMore flex flex-column md:flex-row justify-content-center align-items-center">
              <!-- <Button type="button" label="Messages" icon="pi-arrow-down" badge="8" outlined /> -->
              <Button style="background-color: white; color: black;" class="border-0" label="Learn More" rounded>
                <span class="px-3 font-bold">Learn More</span>
                <i class="pi pi-arrow-down px-2"></i>
              </Button>
              <Button class="contactUs mt-3 md:mt-0 md:ml-3 lg:ml-3" label="Learn More" rounded>
                <span class="px-3 font-bold">Contact Us</span>
                <div class="border-circle py-2">
                  <i class="pi pi-envelope px-2"></i>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div class="col-12 lg:col-8">
          <div class="grid h-full">
            <div class="col-12">
              <div
                class="text-center p-3 h-full border-round-sm flex-column border-round-3xl text-white flex align-items-center justify-content-between font-bold"
                style="background: linear-gradient(#234686, #0D5ADB)">
                <div class="md:w-full md:ml-3 lg:ml-0 lg:w-10 relative">
                  <p class="smartPeople text-left">REAL DESIGNS
                    BY SMART PEOPLE
                    FOR ALL PEOPLE</p>
                  <svg class="hidden lg:block absolute top-0" style="left: 20%" width="269" height="63"
                    viewBox="0 0 269 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M267.661 26.3C267.729 28.0681 267.008 29.9093 265.401 31.8218C263.789 33.7401 261.33 35.6732 258.058 37.5818C251.515 41.3978 241.908 45.0078 229.903 48.2021C205.909 54.5864 172.554 59.2544 135.533 60.6749C98.5125 62.0953 64.8976 59.9968 40.4852 55.4697C28.2708 53.2047 18.4153 50.3415 11.5992 47.038C8.19022 45.3858 5.59062 43.6467 3.83666 41.8575C2.0881 40.0739 1.22819 38.2933 1.16035 36.5251C1.09251 34.7569 1.81345 32.9157 3.4202 31.0033C5.03191 29.085 7.49061 27.1518 10.7629 25.2433C17.3059 21.4272 26.9131 17.8173 38.918 14.623C62.9117 8.23868 96.2671 3.57064 133.288 2.15022C170.308 0.729801 203.923 2.8283 228.336 7.35535C240.55 9.62039 250.406 12.4836 257.222 15.7871C260.631 17.4393 263.23 19.1784 264.984 20.9675C266.733 22.7512 267.593 24.5318 267.661 26.3Z"
                      stroke="#FF2525" stroke-width="2" />
                  </svg>
                </div>
                <p class="px-3 lg:px-7" style="font-size: 16px;">We’re challenging conventional retail, putting an end to
                  dead stock, unconventional waste and more fantastic</p>
              </div>
            </div>
            <div class="col-12 lg:col-6">
              <div class="TrendOfTheWeek text-center p-3 border-round-3xl text-white flex align-items-end font-bold"
                style="background-image: url('/thumbnail_2.png'); background-size: cover; font-size: 18px">
                <p>#TrendOfTheWeek</p>
              </div>
            </div>
            <div class="col-12 lg:col-6">
              <div class="MENHAVETASTE text-center p-3 border-round-3xl text-white flex align-items-end font-bold"
                style="background-image: url('/thumbnail_3.png'); background-size: cover; font-size: 18px">
                <p>#MENHAVETASTE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Brand -->
    <div v-motion-slide-visible-once-bottom class="container px-4 lg:px-8 h-100">
      <div class="flex flex-column lg:flex-row align-items-center justify-content-end">
        <div
          class="best-seller-product col-12 lg:col-4 text-center flex flex-column align-items-center lg:align-items-start">
          <h6 style="color: #252525; font-size: 40px;">Best Seller Product </h6>
          <p style="color: #252525; font-size: 23px;">Here is a selection of some of the best-selling products this month.
          </p>
          <Button label="SEE MORE" style="color:#252525" outlined />
        </div>
        <div v-if="!products" class="lg:col-6 col-12">
          <Skeleton width="100%" height="550px"></Skeleton>
        </div>
        <div v-else class="lg:col-6 col-12">
          <Carousel :items-to-show="2.5" :autoplay="2000" :wrap-around="true" :breakpoints="breakpoints">
            <Slide v-for="product in products" :key="product.id">
              <Card style="width: 25rem; overflow: hidden; background-color: #E8E8E8 !important;"
                class="m-3 relative h-auto">
                <template #header class="text-center">
                  <img alt="user header" :src="product.photo" class="text-center mx-auto flex w-full" />
                  <div style="background-color: #E95144 !important; width: 5rem"
                    class="text-center absolute p-2 top-0 mt-3 ml-3" value="Primary" rounded>
                    <h4 class="mb-0 text-white"> Sale</h4>
                  </div>
                </template>
                <template #title class="flex justify-center mx-auto">
                  <p style="font-size: 14px !important; color: #252525 !important" class="text-center">{{ product.name }}
                  </p>
                </template>
                <template #subtitle>
                  <p style="font-size: 19px !important; color: #214195 !important; font-weight: 500" class="text-center">
                    {{
                      product.price }}</p>
                </template>
              </Card>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="container flex flex-column lg:flex-row px-2 sm:px-4 lg:px-8 py-8"
      style="background-color: #231F1F; color: white;">
      <div class="col-12 lg:col-3">
        <img src="/footer.png" alt="" srcset="">
        <p class="mt-3">Our brand was born out of a desire to create to make everyone free to express themselves in
          their own wayand
          foster self-confidence in dressing</p>
      </div>
      <div class="col-12 lg:col-3 ml-0 lg:ml-5">
        <h3 class="text-white">Category</h3>
        <div class="list flex flex-column gap-2">
          <a href="#" class="text-white no-underline">Clothes</a>
          <a href="#" class="text-white no-underline">Sweater</a>
          <a href="#" class="text-white no-underline">Shorts</a>
          <a href="#" class="text-white no-underline">Sneaker</a>
          <a href="#" class="text-white no-underline">Jacket</a>
          <a href="#" class="text-white no-underline">Accesories</a>
        </div>
      </div>
      <div class="col-12 lg:col-2">
        <h3 class="text-white">Company</h3>
        <div class="list flex flex-column gap-2">
          <a href="#" class="text-white no-underline">Privacy</a>
          <a href="#" class="text-white no-underline">Article</a>
          <a href="#" class="text-white no-underline">Address</a>
        </div>
      </div>
      <div class="col-12 lg:col-4">
        <h3 class="text-white">Contact Us</h3>
        <p class="text-white">Sign up for exclusive updates & new updates</p>
        <div class="inputForm">
          <InputText type="email" v-model="value" class="border-round-0" placeholder="Enter your email address" />
          <Button class="mt-3 lg:mt-0 lg:ml-3" label="SUBMIT" style="background-color: #214195; color: white" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
a.p-menubar-button {
  width: 100%;
  text-align: right;
  display: flex;
  justify-content: end;
  background: transparent;
  border-radius: 0;
}

#pv_id_2_5 {
  display: block !important;
}

.best-seller-product {
  margin-right: 0;
}

.contactUs {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.contactUs:hover {
  background-color: white;
  color: black;
  border: 1px solid white;
}

.contactUs div {
  background-color: white;
}

.contactUs i {
  color: black !important;
  font-weight: bold !important;
}

.contactUs:hover i {
  color: white !important;
}

.contactUs:hover div {
  background-color: black !important;
}


.TrendOfTheWeek,
.MENHAVETASTE {
  height: 15rem !important;
}

.smartPeople {
  font-size: 25px !important;
}

.promo {
  width: 65vw;
  height: 68px;
  background: linear-gradient(90deg, white 0%, rgba(217, 217, 217, 0.32) 100%);
  border-radius: 100px
}

.learn_more {
  background: #DBFF00;
  border-radius: 100px;
}

.interesting_arrow {
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 100px;
}

.interesting {
  width: 100%;
}

.casual_minimalist {
  margin-left: 0 !important;
}

@media screen and (min-width: 1024px) {
  li#pv_id_1_5 {
    display: none !important;
  }

  #pv_id_2_5 {
    display: none !important;
  }

  a.p-menubar-button {
    display: none !important;
  }

  .smartPeople {
    font-size: 39px !important;
  }

  .best-seller-product {
    margin-right: 10rem;
  }

  .TrendOfTheWeek,
  .MENHAVETASTE {
    height: 100% !important;
  }

  .smartPeople {
    font-size: 50px !important;
  }


  .promo {
    width: 481px;
  }

  .learn_more {
    width: 182px;
    height: 68px;
    left: 297px;
    top: 0px;
    position: absolute;
    background: #DBFF00;
    border-radius: 100px;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex
  }

  .casual_minimalist {
    margin-left: 7rem !important;
  }

}

body {
  margin: 0 !important;
}

.p-card-body {
  background-color: #E8E8E8;
}

.p-card-header {
  background-color: white;
}
</style>
