import { IRepository } from "@models/IReposResponse";
import Tag from "../../components/Tag";
import { getHostnameFromUrl, getLanguageColor } from "../../utils/Utils";

interface IRepoItem {
  repository: IRepository;
}
const RepoItem: React.FC<IRepoItem> = (props) => {
  const { repository } = props;

  return (
    <div className="flex flex-col justify-between p-4 border border-border rounded-md shadow min-h-36">
      <div className="flex flex-row justify-between">
        <a href={repository.html_url} target="_blank" rel="noreferrer">
          <p className="text-accent text-sm font-semibold text-break">
            {repository.name}
          </p>
        </a>
        <div className="flex flex-row gap-1">
          <Tag text={`Star: ${repository.watchers_count}`} />
          <Tag text={repository.private ? "Private" : "Public"} />
        </div>
      </div>
      {repository.fork && (
        <div className="flex flex-row">
          <p className="text-xs text-muted">
            Fork from {getHostnameFromUrl(repository?.homepage ?? "")} - Fork:
            {repository.forks}
          </p>
        </div>
      )}
      <div className="flex flex-row mt-5">
        <p className="text-xs text-muted">{repository.description}</p>
      </div>
      <div className="flex flex-row mt-5 items-center">
        <div
          className={`w-3 h-3 rounded-full mr-2 ${getLanguageColor(
            repository.language!
          )}`}
        ></div>
        <p className="text-xs text-muted">
          {repository.language ?? "TypeScript"}
        </p>
      </div>
    </div>
  );
};

export default RepoItem;
