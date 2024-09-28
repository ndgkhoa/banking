import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
    const loggedIn = {
        firstName: 'text',
        lastName: 'KKK',
        email: 'contact@jasper',
    }

    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently"
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                recent transactions
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 132.42 }, { currentBalance: 160.42 }]}
            />
        </section>
    )
}

export default Home
