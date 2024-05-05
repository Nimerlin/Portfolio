import Image from "next/image";
export default function Photo() {
    return (
        <>
            <Image
                src="https://res.cloudinary.com/adityacprtm/image/upload/v1659200380/production/small_profile_6832daf094.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
            />
        </>
    )


}