import { Link, Outlet, useParams } from "react-router-dom";
import { invoices } from "../data/invoices";

export default function About() {
  return (
    <div>
      <h1>Invoices</h1>
      <ul className="flex space-x-4">
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <Link className="hover:underline" to={`/invoices/${invoice.id}`}>
              {invoice.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
