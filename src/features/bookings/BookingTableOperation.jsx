import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-in", label: "Checked In" },
          { value: "checked-out", label: "Checked Out" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />
      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort By Date(recent first)" },
          { value: "startDate-asc", label: "Sort By Date(earlier first)" },
          { value: "totalPrice-desc", label: "Sort By Amount(high first)" },
          { value: "totalPrice-asc", label: "Sort By Amount(low first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperation;
