import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import FollowersScreen from "../screens/FollowersScreen";
const screens =[
    {
        title:"Profile",
        key: "profile",
        icon:"user",
        component: ProfileScreen
    },
    {
        title:"Settings",
        key: "settings",
        icon:"cog",
        component: SettingsScreen
    },
    {
        title:"Favorites",
        key: "favorites",
        icon:"bookmark",
        component: FavoritesScreen
    },
    {
        title:"Followers",
        key: "followers",
        icon:"users",
        component: FollowersScreen
    },

]

export default screens;