import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import styled from "@emotion/styled";
import { usePrevious } from "@react-hookz/web";

export const App = () => {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count) || 0;

    return (
        <>
            <div>
                <LogoAnchor href="https://vitejs.dev" target="_blank">
                    <Logo src={viteLogo} alt="Vite logo" />
                </LogoAnchor>
                <LogoAnchor href="https://react.dev" target="_blank">
                    <Logo src={reactLogo} className="react" alt="React logo" />
                </LogoAnchor>
            </div>
            <h1>Vite + React</h1>
            <Card>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}, previously {prevCount}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </Card>
            <ReadDocs>Click on the Vite and React logos to learn more</ReadDocs>
        </>
    );
};

const Card = styled("div")`
    padding: 2em;
`;

const ReadDocs = styled("div")`
    color: #888888;
`;

const LogoAnchor = styled("a")``;

const Logo = styled("img")`
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;

    &:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    &.react:hover {
        filter: drop-shadow(0 0 2em #61dafbaa);
    }

    @keyframes logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media (prefers-reduced-motion: no-preference) {
        a:nth-of-type(2) & {
            animation: logo-spin infinite 20s linear;
        }
    }
`;
