import { useEffect, useState } from "react";
import SingleCarts from "../../components/singleCarts/SingleCarts";
import { cartsList } from "../../Api/Products";

function CartPage() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await cartsList();
      setCarts(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <h6>لیست سبد ها</h6>
      <div className="row mx-0">
          {carts && carts.length > 0
            ? carts.map((cartData) => <SingleCarts cartDetail={cartData} key={cartData.id} />)
            : "موردی یافت نشد"}
        </div>
    </>
  );
}

export default CartPage;
