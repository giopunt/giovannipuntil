import Image from 'next/image';

export default function CardTitle(props) {
  return <>
    <div class="media is-align-items-center">
      {props.icon && <div class="media-left mr-3"><Image src={`/images/${props.icon}.svg`} width={24} height={24} /></div>}
      <div class="media-content">
        <div className="is-size-6 is-size-7-touch has-text-weight-semibold has-text-black is-uppercase">{props.children}</div>
      </div>
    </div>
  </>;
}