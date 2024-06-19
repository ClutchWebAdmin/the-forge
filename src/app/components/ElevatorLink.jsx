import Link from "next/link";

export default function ElevatorLink({ linkTo, number, name, subtext }) {
  return (
    <li className="p-2 hover:bg-blue-200/40 rounded-2xl">
      <Link href={linkTo} className="flex flex-row items-center gap-3 py-2">
        <div className="flex justify-center items-center font-semibold w-10 h-10 border border-vaultPurple-dark rounded-full">
          {number}
        </div>
        <div className="flex flex-col gap-0.5 leading-none">
          <p className="text-medium">{name}</p>
          <p className="text-xs text-gray-600">{subtext}</p>
        </div>
      </Link>
    </li>
  );
}
