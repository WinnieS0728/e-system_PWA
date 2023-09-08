import { deviceType } from "@/data/web support";
import { webSupport } from "@/data/web support";
import { Icons } from "./UI/icons";

interface props {
  type: deviceType;
}

export function SupportTable({ type }: props) {
  return (
    <table className='mx-auto'>
      <thead>
        <tr>
          <th colSpan={webSupport[`${type}`].length}>
            {type === "computer" ? "電腦" : "手機"}
          </th>
        </tr>
        <tr>
          {webSupport[`${type}`].map((web, index) => (
            <th key={index}>{web.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {webSupport[`${type}`].map((web, index) => {
            let icon: JSX.Element;
            switch (web.support) {
              case true:
                icon = <Icons.yes className='text-green-500 text-xl' />;
                break;
              case false:
                icon = <Icons.no className="text-red-500 text-xl" />;
                break;
              default:
                icon = <Icons.unknown className="text-yellow-500 text-xl"/>;
                break;
            }
            return (
              <td key={index}>
                <span className="flex justify-center items-center">{icon}</span>
              </td>
            );
          })}
        </tr>
      </tbody>
    </table>
  );
}
