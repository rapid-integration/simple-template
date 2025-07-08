"use client";

import { FunctionComponent } from "react";

import {
  UserCreatedAtDataListItem,
  UserIdDataListItem,
  UserUsernameDataListItem,
} from "@/entities/user";
import CopyButton from "@/shared/ui/copy-button";
import DataList from "@/shared/ui/data-list";

interface UserProfileInfoProps {
  username: string;
  created_at: string;
  id: string;
}

const UserProfileInfo: FunctionComponent<UserProfileInfoProps> = (props) => {
  return (
    <section className="flex flex-col gap-4">
      <DataList orientation="horizontal">
        <UserUsernameDataListItem
          value={props.username}
          action={
            <CopyButton
              value={props.username}
              messages={{
                copy: "Скопировать имя пользователя",
                success: "Имя пользователя скопировано!",
                error:
                  "Не удалось скопировать имя пользователя: окно браузера используется в небезопасном контексте.",
              }}
            />
          }
        />
      </DataList>

      <DataList orientation="horizontal">
        <UserCreatedAtDataListItem
          value={props.created_at}
          action={(value) => (
            <CopyButton
              value={value}
              messages={{
                copy: "Скопировать дату регистрации",
                success: "Дата регистрации скопирована!",
                error:
                  "Не удалось скопировать дату регистрации: окно браузера используется в небезопасном контексте.",
              }}
            />
          )}
        />

        <UserIdDataListItem
          value={props.id}
          action={
            <CopyButton
              value={props.id}
              messages={{
                copy: "Скопировать идентификатор",
                success: "Идентификатор скопирован!",
                error:
                  "Не удалось скопировать идентификатор: окно браузера используется в небезопасном контексте.",
              }}
            />
          }
        />
      </DataList>
    </section>
  );
};

export default UserProfileInfo;
