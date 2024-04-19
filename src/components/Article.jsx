export const Article = ({image, title, subtitle, text}) => {
    return (
      <article>
        <div className="">
            <div className="flex-2">
                <img className="h-25 sm:h-40 mt-8 pb-6" src={image}></img>
            </div>
            <div className="">
                <h2 className="text-[22px] text-DarkGrayisBlue font-bold sm:text-[18px]">{title}</h2>
                <h3 className="cursor-pointer text-[18px] hover:text-SoftOrange font-bold sm:text-[14px]">{subtitle}</h3>
                <p className="text-[15px] sm:text-[12px]">{text}</p>
            </div>
        </div>
      </article>
    )
  }
  