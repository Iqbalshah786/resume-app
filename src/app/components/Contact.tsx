import Image from "next/image";

interface contactTypes {
  name: string;
  icon: any;
}
interface Props {
  contacts: contactTypes[];
}

export default function Contact({ contacts }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1 className="uppercase mb-4 text-xl">contact me</h1>
      <div className="flex gap-6">
        {contacts.map((contact) => (
          <>
            <Image
              src={contact.icon}
              alt={contact.name}
              width={30}
              height={30}
            />
          </>
        ))}
      </div>
    </div>
  );
}
