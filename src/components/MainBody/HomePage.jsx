import React from "react";
import Card from "../Card/Card";
import CardItems from "../Card/CardItems";
import data from "../../api/Card.json";
import DataTable from "../Table/Table";
const HomePage = () => {
  return (
    <div>
      <Card>
        {data?.map((item, index) => (
          <CardItems
            key={index}
            image={item?.image}
            title={item?.title}
            description={item?.description}
            price={item?.price}
          />
        ))}
      </Card>
      <DataTable />
    </div>
  );
};

export default HomePage;
