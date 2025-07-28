

export default function SectionLineComponent({title}: { title?: string}) {
  return (
    <div
      className="fade-in-up opacity-0 animate-fade-in-up max-w-7xl mx-auto px-8"
    >
      <div className="flex items-center my-12">
        {title ? (
          <>
            <div className="flex-grow border-t border-gray-300" />
            <h2 className="px-4 text-24 text-xl tracking-widest text-gray-800 uppercase font-montserrat font-normal">{title}</h2>
            <div className="flex-grow border-t border-gray-300" />
          </>
        ) : (
          <div className="flex-grow border-t border-gray-300" />
        )}
      </div>
    </div>
  );
}