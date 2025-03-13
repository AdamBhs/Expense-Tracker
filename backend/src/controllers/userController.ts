import prisma from "../config/prismaClient"

export const getUserdata = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.user.id,
            },
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json([user.username, user.email] );
    } catch (error) {
        console.error("Error getting user data : ", error);
        res.status(500).json({ error: 'Internal server error' });
    }
}