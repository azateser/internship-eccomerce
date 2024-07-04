import Layout from "../../components/layout";
import "./Favorites.css";
import ProfileLayout from "../../components/profile";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "../../services";
import { removeFromFavorite } from "../../services/favoriteSlice";
const FavoritesPage = () => {
  const favorite = useAppSelector((state) => state.favorite.items);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <div className="favorites">
        <div className="flex items-center justify-between mb-12">
          <h1>Favorites</h1>
          <span>
            <b>{favorite.length}</b> item in favorites
          </span>
        </div>

        <ProfileLayout>
          <div className="grid gap-4 grid-cols-2">
            {favorite.map((item) => (
              <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    className="rounded-lg w-28"
                    src={`https://picsum.photos/112/112?random=${item.id}`}
                    alt="product"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600">
                      {item.description.slice(0, 25)}...
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <span className="font-bold text-xl">${item.price}</span>
                  <button
                    onClick={() => dispatch(removeFromFavorite(item.id))}
                    className="text-red-500 hover:text-red-600 cursor-pointer hover:scale-110"
                  >
                    <RiDeleteBin6Line size={24} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </ProfileLayout>
      </div>
    </Layout>
  );
};

export default FavoritesPage;
