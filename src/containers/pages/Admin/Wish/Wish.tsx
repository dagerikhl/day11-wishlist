import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFirestore } from "reactfire";

import { Button } from "../../../../components/form/Button/Button";
import { Input } from "../../../../components/form/Input/Input";
import { Space } from "../../../../components/layout/Space/Space";
import { useStatus } from "../../../../hooks/useStatus";

import styles from "./Wish.module.css";

export const Wish: React.FC = () => {
  const { documentId } = useParams();

  const firestore = useFirestore();

  const { resetStatus, setError, setSuccessMessage, statusElement } = useStatus(
    undefined,
    1000,
    "/admin"
  );

  useEffect(() => {
    if (documentId) {
      firestore
        .collection("wishes")
        .doc(documentId)
        .get()
        .then((data) => {
          setAquired(!!data.get("aquired"));
          setDescription(data.get("description") || "");
          setIcon(data.get("icon") || "");
          setTitle(data.get("title") || "");
          setUrl(data.get("url") || "");
        });
    }
  }, [documentId, firestore]);

  const [aquired, setAquired] = useState(false);
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const onAquiredChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    resetStatus();

    setAquired(event.target.checked);
  };

  const onIconChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    resetStatus();

    setIcon(event.target.value);
  };

  const onDescriptionChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    resetStatus();

    setDescription(event.target.value);
  };

  const onTitleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    resetStatus();

    setTitle(event.target.value);
  };

  const onUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    resetStatus();

    setUrl(event.target.value);
  };

  const onSave = () => {
    resetStatus();

    if (documentId) {
      firestore
        .collection("wishes")
        .doc(documentId)
        .update({ aquired, description, icon, title, url })
        .then(() => {
          setSuccessMessage("Wish updated");
        })
        .catch(setError);
    } else {
      firestore
        .collection("wishes")
        .add({ aquired, description, icon, title, url })
        .then(() => {
          setSuccessMessage("Wish added");
        })
        .catch(setError);
    }
  };

  return (
    <>
      <Space bottom="large">
        <h1 className={styles.heading}>Wish</h1>
      </Space>

      {statusElement}

      <div className={styles.form}>
        <Input
          label="Aquired"
          type="checkbox"
          checked={aquired}
          onChange={onAquiredChange}
        />
        <Input
          label="* Title"
          placeholder="Title of wish"
          value={title}
          onChange={onTitleChange}
          top
        />
        <Input
          label="Description"
          placeholder="Description of wish"
          value={description}
          onChange={onDescriptionChange}
          top
        />
        <Input
          label="Icon"
          placeholder="Icon URL for wish"
          value={icon}
          onChange={onIconChange}
          top
        />
        <Input
          label="URL"
          placeholder="Link to wish"
          value={url}
          onChange={onUrlChange}
          top
        />
      </div>

      <Button onClick={onSave} top="large">
        Save
      </Button>
    </>
  );
};
