import Category from "./Category";

function CategoryColumn() {
  return (
    <div className="p-2 mt-2 max-w-[600px] xl:min-w-[200px]">
      <Category title="Yalova" logo="/images/yalova.jpg" />
      <div className="border-b border-gray-300 my-2"></div> {/* Çizgi */}
      <Category title="Altınova" logo="/images/altinova.jpg" />
      <div className="border-b border-gray-300 my-2"></div> {/* Çizgi */}
      <Category title="Taşköprü" logo="/images/taskopru.jpg" />
      <div className="border-b border-gray-300 my-2"></div> {/* Çizgi */}
      <Category title="Armutlu" logo="/images/armutlu.jpg" />
      <div className="border-b border-gray-300 my-2"></div> {/* Çizgi */}
      <Category title="Çınarcık" logo="/images/cinarcik.jpg" />
      <div className="border-b border-gray-300 my-2"></div> {/* Çizgi */}
      <Category title="Çiftlikköy" logo="/images/ciftlikkoy.jpg" />
      <div className="border-b border-gray-300 my-2"></div> {/* Çizgi */}
      <Category title="Termal" logo="/images/termal.jpg" />
    </div>
  );
}

export default CategoryColumn;
