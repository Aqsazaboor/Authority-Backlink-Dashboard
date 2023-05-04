import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyOrder from "../MyOrder/MyOrder";
import MarketPlace from "../MarketPlace/MarketPlace";
import NewSites from "../NewSites/NewSites";
import Funds from "../Funds/Funds";
import Invoice from "../Invoice/Invoice";

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyOrder />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/newsites" element={<NewSites />} />
        <Route path="/funds" element={<Funds />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </>
  );
}
