// Reservation model
export default Reservation = () => {
    id: string;
    roomId: string;
    hotelId: string;
    guestName: string;
    guestEmail: string;
    checkInDate: Date;
    checkOutDate: Date;
    totalAmount: number;
    paymentMethod: string;
}