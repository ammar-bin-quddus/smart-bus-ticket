const seatBtn = document.querySelectorAll("#btn-div button");
const bookedSeatDet = document.querySelector("#bookedSeatDet");
const countSeat = document.querySelector("#countSeat");
const applyBtn = document.getElementById("applyBtn");
const totalPrice = document.getElementById("totalPrice");
const couponField = document.getElementById("couponField");
const discountPrice = document.getElementById("discountPrice");
console.log(couponField);

// const seatPrice = document.getElementById("seatPrice");
// console.log(seatPrice.innerText)

let totalSeat = 40;
let countClickBtn = 0;
let totalSeatPrice = 0;
let grandTotal = 0;

seatBtn.forEach((elem) => {
    elem.addEventListener("click", (det) => {
        let isContainBg = det.target.classList.contains("bg-green-200");
        let targetContent = det.target.innerText;
        det.target.classList.add("bg-green-200");

        if (totalSeat > 0 && isContainBg === false) {
            bookedSeatDet.innerHTML += `<tr>
                         <td class="text-left px-2 py-1">${targetContent}</td>
                         <td class="text-left px-2 py-1">Economy</td>
                         <td class="text-right px-2 py-1">550</td>
                    </tr>`
            totalSeat--;
            countSeat.innerText = `${totalSeat} Seats Left`;
            countClickBtn++;
            totalSeatPrice += 550;
            totalPrice.innerText = `BDT ${totalSeatPrice.toFixed(2)}`

            //console.log(countClickBtn)
        } else {
            alert("seat already booked")
        }

        if (countClickBtn === 4) {
            applyBtn.disabled = false;
        }
        //console.log(totalSeatPrice);
    })

})

let discountCoupon1 = totalSeatPrice * 0.15;
let discountCoupon2 = totalSeatPrice * 0.20;
console.log(discountCoupon1)
function handleCoupon() {
    let coupon1 = "NEW50";
    let coupon2 = "Couple 20";
    if (couponField.value === coupon1) {
        let grandTotalCoupon1 = totalSeatPrice - discountCoupon1;

        discountPrice.innerText = `BDT ${grandTotalCoupon1}`;
    }
    if (couponField.value === coupon2) {
        let grandTotalCoupon2 = totalSeatPrice - discountCoupon2;

        discountPrice.innerText = `BDT ${grandTotalCoupon2}`;
    }
}