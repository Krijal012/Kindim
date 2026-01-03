import AuthBox from "../Components/AuthBox";
import Left from "../Components/left";
import Right from "../Components/right";
import Header from "../Components/header";
import Footer from "../Components/footer";

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
