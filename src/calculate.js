export default function calculateTotal(purchases, applyDiscound){
    const sum = purchases.reduce((total, item) => {
        return total + (item.count * item.price);
    }, 0);
    if (applyDiscound) return sum * .891;
    return sum;
}
