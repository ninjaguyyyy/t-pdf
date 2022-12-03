import { COPYRIGHT_LINK } from 'constants/common';

export default function Copyright() {
  return (
    <p className="font-light text-sm text-center mt-8 xs:text-xs">
      <span>Copyright from </span>
      <a href={COPYRIGHT_LINK} className="font-bold">
        Groovy
      </a>
    </p>
  );
}
