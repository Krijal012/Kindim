import AuthBox from "../Components/AuthBox";
import Left from "../Components/left";
import Right from "../Components/right";
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';

function SetNewPass() {
    return (
        <>
            <Header />
            <AuthBox>
                <Left />
                <Right />
            </AuthBox>
            <Footer />
        </>
    );
}

export default SetNewPass;
