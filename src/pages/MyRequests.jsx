import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuRequests from "../components/MenuRequests";
import MenuStatusRequests from "../components/MenuStatusRequests";



export default function MyRequests () {

    return (
        <>
        <Header />
        <div className="flex flex-col md:flex-row gap-4">
        <MenuRequests />
        <MenuStatusRequests />
</div>



        <Footer />
        
        
        </>
    );
}
