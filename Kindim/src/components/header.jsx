import logo from '../assets/Logo.png';

export function Header(){
    return(
        <>
            <header className=''>
                <img src={logo} className='logo' alt="Kindim Logo" />
                <span className='brand name'>Kindim</span>
                <form className='search form'>
                    <i className='fas fa-search search-icon'></i>
                    <input type="text" className='search-input' placeholder='search products...' />
                </form>
                <button className='logout=btn'>Logout</button>
            </header>
        </>
    )
}