import { useParams } from "react-router-dom";
import { invoices } from "../data/invoices";

export default function Invoice() {
  const { invoiceId } = useParams();
  const invoice = invoices.find(
    (invoice) => invoice.id === parseInt(invoiceId as string)
  );
  if (!invoice) {
    return (
      <p className="text-red-500">No Invoice with ID {invoiceId} was found</p>
    );
  }
  return (
    <div>
      <span>{invoice.title}</span>
      <span>{invoice.price}</span>
    </div>
  );
}
