import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function PageHeader({ label, href }: { label: string, href: string }) {
  return (
    <div className="d-flex align-items-center">
      <Link href={href} className="d-flex align-items-center justify-content-center text-decoration-none text-black me-2">
        <IoIosArrowBack className=" m-0 h4 fw-bold" />
      </Link>
      <h5 className="fw-bold mb-0">{label}</h5>
    </div>
  )
}