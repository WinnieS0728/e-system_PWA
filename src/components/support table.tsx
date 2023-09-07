import { deviceType } from "@/data/web support";
import { webSupport } from "@/data/web support";

interface props {
  type: deviceType;
}

export function SupportTable({ type }: props) {
  return (
    <table>
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
            let icon: string;
            switch (web.support) {
              case true:
                icon = "yes";
                break;
              case false:
                icon = "no";
                break;
              default:
                icon = "?";
                break;
            }
            return <td key={index}>{icon}</td>;
          })}
        </tr>
      </tbody>
    </table>
  );
}
