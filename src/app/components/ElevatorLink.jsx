import Link from "next/link";

export default function ElevatorLink({ linkTo, number, name, subtext }) {
  return (
    <li className="p-2 hover:bg-blue-200/40 rounded-2xl">
      <Link href={linkTo} className="flex flex-row items-center gap-3 py-2">
        <div className="flex justify-center items-center font-medium w-10 h-10 border-2 border-[#220202] rounded-full">
          {number}
        </div>
        <div className="flex flex-col gap-0.5 leading-none">
          <p>{name}</p>
          <p className="text-xs text-gray-600">{subtext}</p>
        </div>
      </Link>
    </li>
  );
}
