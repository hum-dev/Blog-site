function Footer () {
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth(); 
    const day = date.getDate();
    const myDate = `${month}/${day}/${year}`;
    return (
        <div className="footer">
            <p> &copy; 2023 Humphrey</p>
            <p>{myDate}</p>
        </div>
    )
}
export default Footer;