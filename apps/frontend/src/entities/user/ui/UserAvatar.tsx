import { UserResponse } from "@/shared/api";
import Avatar from "@/shared/ui/avatar";

import { parseInitials } from "../lib/parseInitials";

export interface UserAvatarProps extends React.ComponentProps<typeof Avatar> {
  user: UserResponse;
}

const UserAvatar: React.FunctionComponent<UserAvatarProps> = ({
  user,
  ...props
}) => {
  return (
    <Avatar {...props}>
      <Avatar.Image
        src={`https://avatar.vercel.sh/${user.username}`}
        alt={user.username}
        draggable={false}
      />
      <Avatar.Fallback>{parseInitials(user.username)}</Avatar.Fallback>
    </Avatar>
  );
};

export default UserAvatar;
