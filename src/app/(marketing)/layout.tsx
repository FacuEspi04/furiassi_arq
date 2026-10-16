import { Nav } from "@/components/marketing/Nav";
import { Footer } from "@/components/marketing/Footer";
import { WhatsappFab } from "@/components/marketing/WhatsappFab";
import { WhatsappClickTracker } from "@/components/marketing/WhatsappClickTracker";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
      <WhatsappFab />
      <WhatsappClickTracker />
    </>
  );
}
