import TableHeader from "./TableHeader";
import UserCard from "./UserCard";

const Table = ({data}) => {
  return (
    <div className="container my-4 px-12 lg:px-8 sm:px-2">
      <div className="shadow-[0_0_2px_rgba(50,69,107,0.4)]  overflow-hidden">
        <table className="w-full table-auto">
          <TableHeader />

          <tbody >
            {data.map((item, i) => (
              <UserCard key={item.name} data={item} index={i} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
