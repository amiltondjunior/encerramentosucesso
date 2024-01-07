import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './MsgEncerramento.module.css';

interface Props {
  className?: string;
}
/* @figmaId 203:6 */
export const MsgEncerramento: FC<Props> = memo(function MsgEncerramento(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle13}></div>
      <div className={classes.encerramentoRealizadoComSucess}>
        <div className={classes.textBlock}>Encerramento</div>
        <div className={classes.textBlock2}>realizado com sucesso!</div>
      </div>
      <div className={classes._352036Autorenew1}></div>
    </div>
  );
});
