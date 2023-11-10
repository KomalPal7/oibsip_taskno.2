const mains= document.querySelectorAll(".mains")
console.log(mains)
var counter=0;
mains.forEach(
    (mains,index)=>{
        mains.style.left=`${index*100}%`
    }
)
const goprev = () => {
    counter--
    mainsImage()
}
const goNext = () => {
    counter++
    mainsImage()
}
const mainsImage = () => {
    mains.forEach(
        (mains) => {
            mains.style.transform = `translateX(-${counter*100}%)`
        }
    )
}