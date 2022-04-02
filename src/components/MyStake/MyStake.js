import clsx from "clsx";
import React from "react";
import Card from "./Card/Card";
import Styles from "./MyStake.module.css";

const MyStake = ({
  withdrawInput,
  stakeInput,
  onChangeInput,
  onClickStake,
  onClickWithdraw,
  onClickGetAddress,
  userTotal,
  rewardAmount,
  stakeAmount,
  connected,
  addreesInput,
}) => {
  const { account, amount, time } = userTotal;
  return (
    <div className={Styles.root}>
      <div className={Styles.separate}>
        <h2 className={Styles.heading}>My stake</h2>

        <div className={Styles.stake_body}>
          <div className={Styles.card_container}>
            <Card cardKey="Total Staked" cardValue={stakeAmount} />
            <Card cardKey="Total Reward" cardValue={rewardAmount} />
          </div>
          <form onSubmit={onClickStake} className={Styles.form}>
            <input
              type="number"
              placeholder="Amount to stake"
              className={Styles.input}
              value={stakeInput}
              onChange={onChangeInput}
              id="stake"
            />
            <button
              type="submit"
              className={clsx({
                [Styles.stake_btn]: true,
                [Styles.btn_diabled]: !connected,
              })}
              disabled={!connected}
            >
              Stake
            </button>
          </form>

          <form onSubmit={onClickWithdraw} className={Styles.form}>
            <input
              type="number"
              placeholder="Amount to unstake"
              className={Styles.input}
              value={withdrawInput}
              onChange={onChangeInput}
              id="unstake"
            />
            <button
              type="submit"
              className={clsx({
                [Styles.unstake_btn]: true,
                [Styles.btn_diabled]: !connected,
              })}
              disabled={!connected}
            >
              Withdraw
            </button>
          </form>
        </div>
      </div>
      <div className={Styles.address}>
        <form onSubmit={onClickGetAddress} className={Styles.form3}>
          <input
            type="text"
            placeholder="Enter address: 0x*****"
            className={Styles.input3}
            value={addreesInput}
            onChange={onChangeInput}
            id="getAddress"
          />
          <button type="submit" className={Styles.stake_btn}>
            Search
          </button>
        </form>

        <div className={Styles.result}>
          <h4>Address</h4>
          <p>{account}</p>
          <h4>Amount</h4>
          <p>{amount}</p>
          <h4>Time</h4>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default MyStake;
