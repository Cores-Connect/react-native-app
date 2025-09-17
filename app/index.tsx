import { Redirect } from 'expo-router';
import { useAuth } from './_layout';

export default function Index() {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Redirect href="/(tabs)/voice" />;
  }
  
  return <Redirect href="/login" />;
}
