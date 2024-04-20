export const Article = ({image, title, subtitle, text}) => {
    return (
      <article className="flex h-[162px] md:w-[343px] md:flex-grow md:gap-10">
            <div className="w-[100px] flex-none">
                <img src={image} alt="" />
            </div>
            <div className="pl-6">
                <p className="text-DarkGrayisBlue text-[22px] text-3xl mb-[18px font-bold]">{title}</p>
                <h2 className="font-bold mb-[18px] hover:text-SoftOrange cursor-pointer">{subtitle}</h2>
                <p className="text-GrayisBlue text-[16px]">{text}</p>
            </div>
      </article>
    )
  }
  