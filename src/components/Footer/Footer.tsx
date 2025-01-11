import CircleImage from "@components/Image";
import GithubIcon from "@assets/github-icon.svg";
import GithubIconDark from "@assets/github-icon-dark.svg";
import { useTheme } from "@context/ThemeContext";

const Footer: React.FC = () => {
      const { darkMode } = useTheme();
  return (
    <footer className="bg-default py-10 px-5">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <div className="flex flex-row items-center gap-1">
          <CircleImage src={darkMode ? GithubIcon: GithubIconDark} extraAttributes="!w-6 !h-6 m-1.5" alt="GitHub Logo"/>
          <p className="text-xs text-muted">© 2025 GitHub, Inc.</p>
        </div>
        <p className="text-xs text-muted">Terms</p>
        <p className="text-xs text-muted">Privacy</p>
        <p className="text-xs text-muted">Security</p>
        <p className="text-xs text-muted">Status</p>
        <p className="text-xs text-muted">Docs</p>
        <p className="text-xs text-muted">Contact</p>
        <p className="text-xs text-muted">Manage cookies</p>
        <p className="text-xs text-muted">Do not share my personal information</p>
      </div>
    </footer>
  );
};

export default Footer;
