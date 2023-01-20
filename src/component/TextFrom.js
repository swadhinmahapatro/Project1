import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextFrom(props) {
  const [text, setText] = useState("");
  const onclch = (event) => {
    let a = text;
    setText(a.toUpperCase());
    props.stchange("converted to upper case","success");
  };
  const onch = (event) => {
    setText(event.target.value);
  };
  const onclchl = () => {
    setText(text.toLowerCase());
    props.stchange("converted to lower case","success");
  };
  let words = text.split(" ");
  words.map((val, index, words) => {
    if (val === "") {
      words.pop(index);
    }
  });
  let n = words.length;

  var a = "";
  const onrngn = () => {
    let fi = setInterval(() => {
      let st = Math.round(Math.random() * 100);
      if (st >= 97 && st <= 122) {
        if (a.length <= 3) {
          a += String.fromCharCode(st);
        } else {
          setText(`${text} ${a}`);
          clearInterval(fi);
        }
      }
    }, 1);
    props.stchange("Random words generated","success");
  };

  const rmesp = () => {
    let a = text.trim();
    // console.log(a);
    let st = "";
    let count = false;
    let prev = a[0];
    st += prev;
    for (let i = 0; i < a.length; i++) {
      if (i !== 0) {
        if (a[i] !== " ") {
          st += a[i];
        } else {
          if (prev === " " && a[i] === " ") {
          } else {
            st += " ";
          }
          prev = a[i];
        }
        prev = a[i];
      }
    }
    setText(st);
    props.stchange("Extra spaces removed","success");
  };
  return (
    <>
      <div className="mb-3 my-3">
        <h1>--☠️To change🎶--</h1>
        <textarea
          style={{backgroundColor:(props.mode==='light'?'white':'grey'),
          color:((props.mode==='light'?'black':'white'))}}
          className="form-control"
          rows="8"
          value={text}
          onChange={onch}
        ></textarea>
        <button className="btn btn-primary my-1" onClick={onclch}>
          to upper case
        </button>
        <button className="btn btn-primary mx-1" onClick={onclchl}>
          to lower case
        </button>
        <button className="btn btn-primary mx-1" onClick={onrngn}>
          Random word generate
        </button>
        <button className="btn btn-primary" onClick={rmesp}>
          extra space
        </button>
      </div>
      <div className="container">
        <h3>your text summery</h3>
        <p>
          {text.length} characaters {n} words{" "}
        </p>
        <p> this can be read in {text.length * 0.008}</p>
        <h3 style={{
          color:'navajowhite',
          textDecoration:''
        }}>preview:</h3>
        <strong>{(text.length>0)?text:'enter something preview'}</strong>
      </div>
    </>
  );
}
TextFrom.propTypes = {
  name: PropTypes.string,
};
TextFrom.defaultProps = {
  name: "textarea",
};
