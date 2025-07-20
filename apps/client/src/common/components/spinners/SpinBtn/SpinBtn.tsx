/** @jsxImportSource @emotion/react */

"use client";

import { useMemo, type FC } from "react";
import { v4 } from "uuid";
import { easeInOut, motion } from "framer-motion";
import { css } from "@emotion/react";
import { resp } from "@/core/lib/style";

const SpinBtn: FC = ({}) => {
  const ids = useMemo(() => Array.from({ length: 4 }, () => v4()), []);

  return (
    <div className="flex gap-5 items-center">
      {ids.map((id, i) => (
        <motion.div
          key={id}
          css={css`
            width: 25px;
            height: 25px;

            ${resp(350)} {
              width: 30px;
              height: 30px;
            }
            ${resp("sm")} {
              width: 35px;
              height: 35px;
            }

            background: var(--white__0);
            box-shadow: 0 0 5px var(--white__0), 0 0 10px var(--white__0),
              0 0 15px var(--white__0), 0 0 20px var(--white__0),
              0 0 25px var(--white__0);
            border-radius: 50%;
          `}
          transition={{
            duration: 1,
            delay: (i * 1) / ids.length,
            ease: easeInOut,
            repeat: Infinity,
          }}
          animate={{
            scale: [1, 1.25, 1],
            y: [0, 35, 0],
          }}
        ></motion.div>
      ))}
    </div>
  );
};

export default SpinBtn;
