import Image from 'next/image';

export default function SocialLink(props) {
  return (
    <a href={props.href} className="button is-small has-text-black is-ghost px-0 mr-4" target="_blank">
      <Image src={`/images/${props.icon}.svg`} width={14} height={14} className="mr-2" />
      {props.label}
      <Image src={`/images/arrow-up-right.svg`} width={16} height={16} className="ml-4" />
    </a>
  );
}
