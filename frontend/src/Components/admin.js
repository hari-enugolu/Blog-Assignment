import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList, UserEdit, UserCreate } from "./Users.js";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

function admin() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource>
        name="users" list={UserList}
        edit={UserEdit}
        create={UserCreate}
      </Resource>
    </Admin>
  );
}
export default admin;
