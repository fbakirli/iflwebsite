import FirstScreen from "../FirstScreen/FirstScreen";
import NewsPage from "../NewsPage/NewsPage";
import ShopSection from "../ShopSection/ShopSection";
import FormSection from "../FormSection/FormSection";
import InstagramSection from "../InstagramSection/InstagramSection";
import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <>
      <FirstScreen />
      <NewsPage showHeader={false} />
      <ShopSection />
      <FormSection />
      <InstagramSection />
      <Footer />
    </>
  );
}
