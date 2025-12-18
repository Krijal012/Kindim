import PassResetImage from '../assets/passwordReset.png';

function Left() {
    return (
        <div className="w-[320px] h-[320px] flex items-center justify-center">
            <img
                src={PassResetImage}
                alt="Password Reset"
                className="w-full h-full object-contain"
            />
        </div>
    );
}

export default Left;
