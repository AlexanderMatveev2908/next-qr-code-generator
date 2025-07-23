/** @jsxImportSource @emotion/react */
"use client";

import type { FC } from "react";
import HeaderRes from "./components/HeaderRes";
import { PostQrFormT } from "@shared/first/schemas/qr.post.js";
import { grabSize } from "./lib";
import BodyRes from "./components/BodyRes";
import FooterRes from "./components/FooterRes";
import { buildActionsQr } from "./uiFactory/actions";
import { useGenIDs } from "@/core/hooks/etc/useGenIDs";
import CardAct from "./components/CardAct";
import ContentActBtn from "./components/ContentActBtn";
import { DownloadSvg } from "@/common/components/SVGs";

type PropsType = {
  urlCode: string;
  input: PostQrFormT;
  fileName: string;
};

const QrRes: FC<PropsType> = ({ urlCode, input, fileName }) => {
  const size = grabSize(input.size);

  const {
    ids: [ids],
  } = useGenIDs({
    lengths: [2],
  });

  return (
    <div className="w-[90%] sm:w-[75%] xl:w-full xl:px-[288px] py-[32px] h-full grid grid-cols-1 gap-[20px]">
      <div className="w-full h-fit bg-white_sec rounded-[12px] p-[15px] xl:p-[33px] grid grid-cols-1 gap-[25px]">
        <HeaderRes />

        <BodyRes
          {...{
            size,
            urlCode,
            inputUrl: input.url,
          }}
        />

        <FooterRes {...input} />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
        {buildActionsQr(input.format).map((el, i) => (
          <CardAct key={ids[i]} {...{ el }}>
            {({ labelBtn, darkClr }) =>
              !i ? (
                <a href={urlCode} download={fileName}>
                  <ContentActBtn
                    {...{
                      $bg: darkClr,
                      label: labelBtn,
                      Svg: DownloadSvg,
                    }}
                  />
                </a>
              ) : (
                <div className=""></div>
              )
            }
          </CardAct>
        ))}
      </div>
    </div>
  );
};

export default QrRes;
