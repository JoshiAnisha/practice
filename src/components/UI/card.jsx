export const Card = ({ randomData }) => {
  const { url, id, title } = randomData;
  return (
    <div className="w-full h-full overflow-hidden rounded-lg ">
      
        <img
          src={url}
          alt={title || id}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
        <div className="flex flex-col gap-2">
          <span >{title} </span>
          <span>ID:{id} </span>
        </div>
      </div>
  );
};

